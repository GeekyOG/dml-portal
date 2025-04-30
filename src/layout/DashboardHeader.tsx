// import { notifySuccess } from "@/notifications/notify";
import { Dropdown, Menu } from "antd";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";
// import { DecodedData } from "../types/DecodedDataType";
import { logout } from "../utils/logout";
import Container from "../ui/Container";
import { Bell, MenuIcon } from "lucide-react";
import Button from "../ui/Button";
import { IoIosAdd } from "react-icons/io";

export default function DashbosrdHeader() {
  const navigate = useNavigate();
  // const [user] = useState(Cookies.get("authToken"));

  // const [decodedData, setDecodedData] = useState<DecodedData>();

  // useEffect(() => {
  //   if (user) {
  //     setDecodedData(jwtDecode(user));
  //   }
  // }, []);

  const [showAddProduct, setShowAddProduct] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-[10px]  w-[100%] border-b-[1px]">
      <Container className="flex h-[72px] items-center justify-between">
        <p className="text-[1.5rem] font-[600] text-neutral-700">DML Films</p>
        <MenuIcon className="lg:hidden" />
        <div>
          <div className="lg:hidden">{/* <MobileNav /> */}</div>
        </div>

        <div className="flex cursor-pointer items-center gap-[18px]">
          {/* <Button
            className="2s flex items-center rounded-[20px] bg-[#a40909] transition ease-in-out hover:scale-[1.05]"
            onClick={() => setOpen(!open)}
          >
            <IoIosAdd size={20} />
            <p>Add Sale</p>
          </Button>

          <Button
            className="2s flex items-center rounded-[20px] bg-[#093aa4] transition ease-in-out hover:scale-[1.05]"
            onClick={() => setShowAddProduct(!showAddProduct)}
          >
            <IoIosAdd size={20} />
            <p>Add Product</p>
          </Button> */}
          {/* <Bell size={30} className="text-[#e3e3e3]" /> */}

          <Dropdown
            trigger={["click"]}
            overlay={
              <Menu>
                <Menu.Item key="0">
                  <Button
                    className="rounded-[8px] bg-neutral-400"
                    onClick={() => {
                      navigate("./settings");
                    }}
                  >
                    Settings
                  </Button>
                </Menu.Item>
                <Menu.Item key="1">
                  <Button
                    className="rounded-[8px] bg-neutral-400"
                    onClick={() => logout()}
                  >
                    Logout
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <RxAvatar size={40} className="text-[#8F8F8F]" />
          </Dropdown>
        </div>
      </Container>
    </div>
  );
}
