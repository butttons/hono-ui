import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva("flex items-center justify-center rounded-full ", {
  variants: {
    variant: {
      transparent: "bg-transparent",
      solid: "bg-[#D9D9D95E]",
      default: "bg-secondary-100 text-secondary-600 backdrop-blur",
    },
    size: {
      md: "text-2xl w-14 h-14",
      sm: "text-xl w-10 h-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

type AvatarProps = VariantProps<typeof avatarVariants> & {
  name?: string;
};

const getInitials = (name: string) => {
  const [firstName, ...lastName] = name.split(" ");
  return `${firstName?.[0] ?? ""}${lastName[lastName.length - 1]?.[0] ?? ""}`;
};

export const Avatar = ({ name, size, variant }: AvatarProps) => {
  return (
    <div class={cn(avatarVariants({ size, variant }))}>
      {name ? getInitials(name) : <i class="ph ph-user" />}
    </div>
  );
};
