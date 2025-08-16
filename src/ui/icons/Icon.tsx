import { Icons } from "./icons-data"

type IconProps = {
  name: string,
  width?: number,
  height?: number,
  className?: string
};

export const Icon = ({ name, height = 32, width= 32, className }: IconProps) => {

  const icon = Icons.find(icon => icon.name === name);

  if (icon) {
    return (
        <svg
          className={className}
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width, height, stroke: "currentColor"}}
          dangerouslySetInnerHTML={{__html: icon.svg}}
        />
    )
  }

  return;
}