import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function UserAvatar({
  name,
  size = "default",
  className,
}: UserAvatarProps) {
  return (
    <Avatar aria-hidden="true" size={size} className={className}>
      <AvatarFallback className="bg-brand/10 font-semibold text-brand">
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
