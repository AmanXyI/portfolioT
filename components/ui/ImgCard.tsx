import { AnimatePresence, delay, motion } from "framer-motion";
type ImgCardProps = {
  title: string;
  imgAdd: string;
  link: string;
  duration: string;
  desc: string;
};
const ImgCard: React.FC<ImgCardProps> = ({
  title,
  imgAdd,
  link,
  duration,
  desc,
}) => {
  return (
    <AnimatePresence>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        href={link}
        className="w-[17rem]  bg-white relative group overflow-hidden rounded-lg"
      >
        <img src={imgAdd} alt={title} />
        <div className="absolute bottom-[.3rem]  bg-navy-blue w-[95%] left-[50%] translate-x-[-50%] text-white px-4 py-4 rounded-md  translate-y-[130%] group-hover:translate-y-0 duration-500">
          <h1 className="font-semibold text-md">{title}</h1>
          <p className="text-sm text-grey-text">{duration}</p>
          <p className="text-sm text-grey-text">{desc}</p>
        </div>
      </motion.a>
    </AnimatePresence>
  );
};
export default ImgCard;
