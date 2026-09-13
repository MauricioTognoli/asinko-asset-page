import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  className?: string;
}

export function UserAvatar({ name, className }: UserAvatarProps) {
  return (
    <Avatar aria-hidden="true" className={className}>
      <AvatarFallback className="bg-brand/10 font-semibold text-brand">
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
