type Link = {
  url: string;
  label: string;
};

type Data = {
  title: string;
  subtitle?: string;
  image?: string;
  link?: Link;
}

export type Props = {
  data: Data;
  className?: string;
};