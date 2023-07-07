const Footer = () => {
  return (
    <div>
      <p className="dark:text-white-dark pt-6 text-center ltr:sm:text-left rtl:sm:text-right">
        © {new Date().getFullYear()}. Fs Studio rights reserved.
      </p>
    </div>
  );
};

export default Footer;
