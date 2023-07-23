import s from "./Loading.module.scss";
interface IProps {
  isLoaded: boolean;
  isPage?: boolean;
  className?: string;
  themes?: "light" | "dark";
}
export const Loading = ({
  isLoaded,
  className,
  isPage = false,
  themes = "light",
}: IProps): JSX.Element => {
  return (
    <div
      className={`${s.loading} ${isPage ? s.isPage : ""} ${
        !isLoaded ? s.isShow : ""
      } ${className || ""} ${s[themes]} loading`}
    >
      <div className={`${s.loading_inner} loading_inner`}>
        <div className={s["lds-spinner"]}>
          fefwaef
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};
