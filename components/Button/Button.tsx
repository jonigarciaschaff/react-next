type ButtonProps = React.ButtonHTMLAttributes<any> & {
  children: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const { children } = props;
  return <button {...props}>{children}</button>;
}
