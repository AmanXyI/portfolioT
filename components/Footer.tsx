const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="bg-navy-blue py-10 text-md text-center">
      &#169; {year} Tushar Choudhari
    </div>
  );
};
export default Footer;
