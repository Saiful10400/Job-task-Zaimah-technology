const NavBar = () => {
    type Troutes={name:string,to:string}
  const routes:Troutes[] = [
    { name: "Perfumes", to: "#" },
    { name: "Brands", to: "#" },
    { name: "Skincare", to: "#" },
    { name: "Makeup", to: "#" },
    { name: "Haircare", to: "#" },
    { name: "Aromatherapy", to: "#" },
    { name: "Candles", to: "#" },
    { name: "Gifts", to: "#" },
  ];

  return <nav className=" flex flex-wrap items-center justify-center gap-[74px] py-8">
{routes.map((item:Troutes)=><a className="font-medium" href={item.to}>{item.name}</a>)}
  </nav>;
};

export default NavBar;
