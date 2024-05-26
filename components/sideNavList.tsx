import { ListGroup } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
export default function SideNavList() {
    return (
      <div className="row-span-7">
        <ListGroup className="mx-5">
          <ListGroup.Item href="#" icon={HiUserCircle}  active>
               Users
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
}