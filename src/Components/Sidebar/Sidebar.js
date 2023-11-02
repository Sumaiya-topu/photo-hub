import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  TrashIcon,
  Cog6ToothIcon,
  ClockIcon,
  PhotoIcon,
  HeartIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function DefaultSidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Photo-HUB
        </Typography>
      </div>
      <List>
        <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <PhotoIcon className="h-5 w-5" />
            </ListItemPrefix>
            Library
          </ListItem>
        </Link>
        <Link to="/favourites">
          <ListItem>
            <ListItemPrefix>
              <HeartIcon className="h-5 w-5" />
            </ListItemPrefix>
            Favourites
          </ListItem>
        </Link>
        <Link to="/memories">
          <ListItem>
            <ListItemPrefix>
              <ClockIcon className="h-5 w-5" />
            </ListItemPrefix>
            Memories
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <TrashIcon className="h-5 w-5" />
          </ListItemPrefix>
          Recently Deleted
        </ListItem>
      </List>
    </Card>
  );
}
