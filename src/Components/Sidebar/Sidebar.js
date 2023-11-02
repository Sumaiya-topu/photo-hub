import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import {
  TrashIcon,
  Cog6ToothIcon,
  ClockIcon,
  PhotoIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function DefaultSidebar() {
  return (
    <div className="hidden xs:block border-r border-blue-gray-100">
      <Card className="h-[calc(100vh)]  w-full max-w-[18rem] p-4 shadow-lg shadow-blue-gray-900/20 rounded-none">
        <List>
          <Link to="/">
            <ListItem className="">
              <ListItemPrefix>
                <PhotoIcon className="h-5 w-5" />
              </ListItemPrefix>
              <h2 className=" ">Library</h2>
            </ListItem>
          </Link>
          <Link to="/favourites">
            <ListItem>
              <ListItemPrefix>
                <HeartIcon className="h-5 w-5" />
              </ListItemPrefix>
              <h2 className=" ">Favourites</h2>
            </ListItem>
          </Link>
          <Link to="/memories">
            <ListItem>
              <ListItemPrefix>
                <ClockIcon className="h-5 w-5" />
              </ListItemPrefix>
              <h2 className=" ">Memories</h2>
            </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            <h2 className=" ">Settings</h2>{" "}
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <TrashIcon className="h-5 w-5" />
            </ListItemPrefix>
            <h2 className=" ">Trash</h2>{" "}
          </ListItem>
        </List>
      </Card>
    </div>
  );
}
