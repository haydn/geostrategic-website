import styles from "./Button.module.css";

type Props = {
  description: string;
  href: string;
  hue: string;
  label: string;
};

const Button = ({ description, href, hue, label }: Props) => (
  <a
    href={href}
    className={styles.container}
    style={{
      backgroundColor: `oklch(74% 0.14 ${hue})`,
    }}
  >
    <span className={styles.content}>
      <span className={styles.label}>{label}</span>
      <span className={styles.description}>{description}</span>
    </span>
  </a>
);

export default Button;
