import React from "react";
import {
  SiFlutter,
  SiDart,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiGnubash,
  SiNodedotjs,
  SiNestjs,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  Zap,
  Layers,
  Network,
  Globe,
  Component,
  Database,
  Code2,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TechnologyIconProps {
  iconId: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function TechnologyIcon({
  iconId,
  name,
  className = "w-5 h-5",
  style,
}: TechnologyIconProps) {
  const normalized = iconId.toLowerCase();

  switch (normalized) {
    case "flutter":
      return <SiFlutter className={cn("text-[#54C5F8]", className)} style={style} aria-label={name || "Flutter"} />;
    case "dart":
      return <SiDart className={cn("text-[#0175C2]", className)} style={style} aria-label={name || "Dart"} />;
    case "c":
      return <SiC className={cn("text-[#A8B9CC]", className)} style={style} aria-label={name || "C"} />;
    case "cplusplus":
    case "c++":
      return <SiCplusplus className={cn("text-[#00599C]", className)} style={style} aria-label={name || "C++"} />;
    case "java":
      return <FaJava className={cn("text-[#ED8B00]", className)} style={style} aria-label={name || "Java"} />;
    case "javascript":
      return <SiJavascript className={cn("text-[#F7DF1E]", className)} style={style} aria-label={name || "JavaScript"} />;
    case "typescript":
      return <SiTypescript className={cn("text-[#3178C6]", className)} style={style} aria-label={name || "TypeScript"} />;
    case "bash":
      return <SiGnubash className={cn("text-[#4EAA25]", className)} style={style} aria-label={name || "Bash"} />;
    case "nodejs":
    case "node.js":
      return <SiNodedotjs className={cn("text-[#5FA04E]", className)} style={style} aria-label={name || "Node.js"} />;
    case "nestjs":
      return <SiNestjs className={cn("text-[#E0234E]", className)} style={style} aria-label={name || "NestJS"} />;
    case "flask":
      return <SiFlask className={cn("text-white", className)} style={style} aria-label={name || "Flask"} />;
    case "postgresql":
      return <SiPostgresql className={cn("text-[#4169E1]", className)} style={style} aria-label={name || "PostgreSQL"} />;
    case "mysql":
      return <SiMysql className={cn("text-[#4479A1]", className)} style={style} aria-label={name || "MySQL"} />;
    case "mongodb":
      return <SiMongodb className={cn("text-[#47A248]", className)} style={style} aria-label={name || "MongoDB"} />;
    case "firebase":
      return <SiFirebase className={cn("text-[#FFCA28]", className)} style={style} aria-label={name || "Firebase"} />;
    case "supabase":
      return <SiSupabase className={cn("text-[#3ECF8E]", className)} style={style} aria-label={name || "Supabase"} />;
    case "getx":
      return <Zap className={cn("text-[#8012EB]", className)} style={style} aria-label={name || "GetX"} />;
    case "provider":
      return <Layers className={cn("text-[#38BDF8]", className)} style={style} aria-label={name || "Provider"} />;
    case "rest":
    case "rest api":
      return <Network className={cn("text-[#10B981]", className)} style={style} aria-label={name || "REST API"} />;
    case "http":
      return <Globe className={cn("text-[#0284C7]", className)} style={style} aria-label={name || "HTTP"} />;
    case "widgets":
    case "custom widgets":
      return <Component className={cn("text-[#A855F7]", className)} style={style} aria-label={name || "Custom Widgets"} />;
    case "data":
    case "data handling":
      return <Database className={cn("text-[#8B5CF6]", className)} style={style} aria-label={name || "Data Handling"} />;
    default:
      return <Code2 className={cn("text-muted-foreground", className)} style={style} aria-label={name || "Technology"} />;
  }
}
