import styles from './PlayButton.module.css';

type Props = {
  href: string;
};

const PlayButton = ({ href }: Props) => <a href={href} className={styles.link}>Play</a>;

export default PlayButton;
