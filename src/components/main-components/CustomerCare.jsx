import React from "react";
import "../../assets/css/CustomerCare.css";
import { TbPackage, TbPackageOff, TbLock, TbTicket } from "react-icons/tb";
import { MdOutlinePayment, MdOutlineAccountCircle } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineTag, AiOutlineMail } from "react-icons/ai";
import { BsChatLeftText, BsHeadphones } from "react-icons/bs";

const CustomerCare = () => {
  return (
    <div className="customer-care-container">
      <h2 className="customer-care-header">Help Center</h2>
      <div className="care-box-container">
        <div className="services-header">
          <h4 className="services-header tertiary">Service Tools</h4>
        </div>
        <div className="services-container">
          <CareServices
            careIcon={<TbPackage size="1.5rem" color="#f46a5b" />}
            careTitle={"My Orders"}
          />
          <CareServices
            careIcon={<TbLock size="1.5rem" color="#f46a5b" />}
            careTitle={"Reset Password"}
          />
          <CareServices
            careIcon={<MdOutlinePayment size="1.5rem" color="#f46a5b" />}
            careTitle={"My Payment Options"}
          />
          <CareServices
            careIcon={<MdOutlineAccountCircle size="1.5rem" color="#f46a5b" />}
            careTitle={"My Profile"}
          />
          <CareServices
            careIcon={<TbTicket size="1.5rem" color="#f46a5b" />}
            careTitle={"My Vouchers"}
          />
          <CareServices
            careIcon={<GiReceiveMoney size="1.5rem" color="#f46a5b" />}
            careTitle={"My Returns"}
          />
          <CareServices
            careIcon={<AiOutlineTag size="1.5rem" color="#f46a5b" />}
            careTitle={"My Promotions"}
          />
          <CareServices
            careIcon={<TbPackageOff size="1.5rem" color="#f46a5b" />}
            careTitle={"My Cancellation"}
          />
        </div>
        <div className="instant-services">
          <h4 className="services-header tertiary" id="instant-service-header">Need more help? Live Chat services are available 24 Hours, 7 Days a Week.</h4>
          <div className="instant-container">
            <InstantServices
              instantIcon={<BsChatLeftText size="2rem" color="#f46a5b" />}
              instantTitle="Chat Now"
              instantInfo="24/7"
            />
            <InstantServices
              instantIcon={<AiOutlineMail size="2rem" color="#f46a5b" />}
              instantTitle="Other Options"
              instantInfo="Other Options"
            />
            <InstantServices
              instantIcon={<BsHeadphones size="2rem" color="#f46a5b" />}
              instantTitle="Seller Help Center"
              instantInfo="Get Your Answers Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CareServices = ({ careIcon, careTitle }) => {
  return (
    <div className="care-box">
      <div className="care-icon">{careIcon}</div>
      <div className="care-title tertiary">{careTitle}</div>
    </div>
  );
};

const InstantServices = ({instantIcon, instantTitle, instantInfo}) => {
  return (
    <div className="instant-service-box">
      <div className="instant-icon">{instantIcon}</div>
      <div className="instant-desc">
        <div className="instant-title">{instantTitle}</div>
        <div className="instant-info tertiary">{instantInfo}</div>
      </div>
    </div>
  );
};

export default CustomerCare;
