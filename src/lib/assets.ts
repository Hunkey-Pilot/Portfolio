import fs from "fs";
import path from "path";
import { DiscoveredImage, ProfileAsset } from "./types";

const SUPPORTED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

/**
 * Transforms a raw filename into a human-readable title/caption.
 * Examples:
 *   "01-home-screen.png" -> "Home Screen"
 *   "task_list_view.webp" -> "Task List View"
 *   "cart-screen.jpg" -> "Cart Screen"
 */
export function generateImageCaption(filename: string): string {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");

  // Special handling for WhatsApp exported mobile screenshots
  if (/^whatsapp\s*image/i.test(nameWithoutExt)) {
    const match = nameWithoutExt.match(/\((\d+)\)$/);
    const index = match ? parseInt(match[1], 10) + 1 : 1;
    return `App Screen Preview ${index}`;
  }

  // Remove leading numbers, dashes, underscores like "01-", "2_"
  const cleanName = nameWithoutExt.replace(/^[\d_-]+/, "");
  // Replace hyphens, underscores with spaces
  const spaced = cleanName.replace(/[-_]+/g, " ").trim();
  if (!spaced) return "Screenshot Preview";

  // Capitalize words
  return spaced
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Server-side check for profile image in public/images/profile/.
 * Automatically discovers any supported image (prioritizing anupam-pal, profile, or any user uploaded image).
 */
export function getProfileImage(): ProfileAsset {
  const profileDir = path.join(process.cwd(), "public", "images", "profile");

  try {
    if (fs.existsSync(profileDir)) {
      const files = fs.readdirSync(profileDir);
      const validImages = files.filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return SUPPORTED_EXTENSIONS.has(ext);
      });

      if (validImages.length > 0) {
        // Prioritize anupam-pal, then profile/dean, then any image
        const preferred =
          validImages.find((f) => /anupam|profile/i.test(f)) ||
          validImages[0];

        return {
          hasImage: true,
          src: `/images/profile/${preferred}`,
          alt: "Anupam Pal - Flutter Mobile Application Developer",
        };
      }
    }
  } catch (error) {
    console.warn("Could not read profile image directory:", error);
  }

  return {
    hasImage: false,
    src: "",
    alt: "Anupam Pal (AP Monogram)",
  };
}

/**
 * Server-side automatic discovery of screenshot files inside:
 * public/images/projects/[projectSlug]/
 */
export function getProjectImages(projectSlug: string): DiscoveredImage[] {
  const projectDir = path.join(process.cwd(), "public", "images", "projects", projectSlug);

  try {
    if (!fs.existsSync(projectDir)) {
      return [];
    }

    const files = fs.readdirSync(projectDir);
    const validImageFiles = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return SUPPORTED_EXTENSIONS.has(ext);
      })
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

    return validImageFiles.map((file) => ({
      src: `/images/projects/${projectSlug}/${file}`,
      alt: `${generateImageCaption(file)} - ${projectSlug}`,
      caption: generateImageCaption(file),
      filename: file,
    }));
  } catch (error) {
    console.warn(`Could not read project directory for ${projectSlug}:`, error);
    return [];
  }
}

/**
 * Discovers screenshots for all three allowed projects:
 * craftybay, task-management, tourde.
 */
export function discoverAllProjectAssets(): Record<string, DiscoveredImage[]> {
  const slugs = ["craftybay", "task-management", "tourde"];
  const manifest: Record<string, DiscoveredImage[]> = {};

  for (const slug of slugs) {
    manifest[slug] = getProjectImages(slug);
  }

  return manifest;
}
