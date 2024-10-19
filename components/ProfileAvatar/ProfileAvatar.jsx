import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { Avatar } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { auth, signOut } from "@/auth";
import { IoLogOutOutline } from "react-icons/io5";

const ProfileAvatar = async () => {
  const session = await auth();
  const user = session?.user;

  const initials = user
    ? `${user.first_name?.[0]?.toUpperCase() || ""}${
        user.last_name?.[0]?.toUpperCase() || ""
      }`
    : "CN";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="border-[1px] bg-gray-200 flex items-center justify-center">
          {/* <AvatarImage src="" /> */}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex gap-x-2 items-center">
            <FaRegUser />

            <p>Profile</p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
            className="flex gap-x-2 items-center"
          >
            <IoLogOutOutline size={18} />
            <button type="submit">Sign out</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatar;
