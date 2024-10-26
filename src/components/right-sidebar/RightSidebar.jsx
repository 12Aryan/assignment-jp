import BugIcon from "../../icons/BugIcon";
import NewUser from "../../icons/NewUser";
import User1 from "../../icons/User1";
import User2 from "../../icons/User2";
import User3 from "../../icons/User3";
import { User4 } from "../../icons/User4";

const RightSidebar = () => {
  const notifications = [
    {
      icon: <BugIcon />,
      message: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      icon: <NewUser />,
      message: "New user registered",
      time: "59 minutes ago",
    },
    {
      icon: <BugIcon />,
      message: "You have a bug that needs to be fixed.",
      time: "12 hours ago",
    },
    {
      icon: <NewUser />,
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  const activities = [
    {
      icon: <User3 />,
      message: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      icon: <User1 />,
      message: "Released a new version",
      time: "59 minutes ago",
    },
    { icon: <User2 />, message: "Submitted a bug", time: "12 hours ago" },
    {
      icon: <User4 />,
      message: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      icon: <User1 />,
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    { icon: <User1 />, name: "Natali Craig" },
    { icon: <User3 />, name: "Drew Cano" },
    { icon: <User2 />, name: "Orlando Diggs" },
    { icon: <User3 />, name: "Andi Lane" },
    { icon: <User4 />, name: "Kate Morrison" },
    { icon: <User1 />, name: "Koray Okumus" },
  ];

  return (
    <div className="xs:hidden xl:flex flex-col h-screen w-[280px] min-w-[280px] px-5 py-6 gap-6 border-l border-[#1C1C1C1A] dark:border-[#FFFFFF1A] overflow-y-auto scroll-hidden">
      <div className="flex flex-col gap-4">
        <div className="text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF] ">
          Notifications
        </div>
        {notifications.map((notification, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="self-start">{notification.icon}</div>
              <div className="flex flex-col">
                <span className="text-sm font-normal text-[#1C1C1C] dark:text-[#FFFFFF] ">
                  {notification.message}
                </span>
                <span className="text-xs font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66]  ">
                  {notification.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF] ">
          Activities
        </div>
        {activities.map((activity, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="self-start">{activity.icon}</div>
              <div className="flex flex-col">
                <span className="text-sm font-normal text-[#1C1C1C] dark:text-[#FFFFFF] ">
                  {" "}
                  {activity.message}
                </span>
                <span className="text-xs font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66]  ">
                  {activity.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF] ">
          Contacts
        </div>
        {contacts.map((contact, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div>{contact.icon}</div>
              <span className="text-sm font-normal text-[#1C1C1C] dark:text-[#FFFFFF] ">
                {contact.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
