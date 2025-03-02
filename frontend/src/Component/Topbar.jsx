// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";  // Import Link
// import logo from "../assets/logo1.png";

// const Topbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "Events", href: "/events" },
//     { label: "Gallery", href: "/circulate/eventgal" },
//     { label: "Team", href: "/circulate/teams" },
//     { label: "Contact us", href: "/contact" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
//       <div className="container px-4 mx-auto relative lg:text-sm">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center flex-shrink-0">
//             <img className="h-20 w-30 mr-2" src={logo} alt="Logo" />
//           </div>
//           <ul className="hidden lg:flex ml-14 space-x-5">
//             {navItems.map((item, index) => (
//               <li key={index} className="hover:bg-gradient-to-r from-org to-yel1 hover:text-white p-3 rounded">
//                 <Link to={item.href} className="">{item.label}</Link>  {/* ✅ Use Link */}
//               </li>
//             ))}
//           </ul>
//           <div className="lg:hidden md:flex flex-col justify-end">
//             <button onClick={toggleNavbar}>
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//         {mobileDrawerOpen && (
//           <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
//             <ul>
//               {navItems.map((item, index) => (
//                 <li key={index} className="py-4 hover:bg-gradient-to-r from-org to-yel scale-110 p-10 rounded-lg">
//                   <Link to={item.href}>{item.label}</Link>  {/* ✅ Use Link */}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Topbar;
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";  // Import Link from react-router-dom
import { Link as ScrollLink } from "react-scroll";  // Import Link from react-scroll
import logo from "../assets/logo1.png";

const Topbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Events", href: "events" },
    { label: "Gallery", href: "/circulate/eventgal" },
    { label: "Team", href: "/circulate/teams" },
    { label: "Contact us", href: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-30 mr-2" src={logo} alt="Logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-5">
            {navItems.map((item, index) => (
              <li key={index} className="hover:bg-gradient-to-r from-org to-yel1 hover:text-white p-3 rounded">
                {item.href.startsWith("/") ? (
                  <RouterLink to={item.href} className="">{item.label}</RouterLink>  // Use RouterLink for external links
                ) : (
                  <ScrollLink to={item.href} smooth={true} duration={500} className="cursor-pointer">{item.label}</ScrollLink>  // Use ScrollLink for internal links
                )}
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 hover:bg-gradient-to-r from-org to-yel scale-110 p-10 rounded-lg">
                {item.href.startsWith("/") ? (
                  <RouterLink to={item.href} className="">{item.label}</RouterLink>  // Use RouterLink for external links
                ) : (
                  <ScrollLink to={item.href} smooth={true} duration={500} className="cursor-pointer">{item.label}</ScrollLink>  // Use ScrollLink for internal links
                )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Topbar;