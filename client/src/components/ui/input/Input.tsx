import styles from './Input.module.css';

interface Props {
  title: string;
  width: string;
  handler: (value: string) => void;
}

const Input = ({ title, width, handler }: Props) => {
  return (
    <div className={styles.container} style={{ width: width }}>
      <span className={styles.title}>{title}</span>
      <input onBlur={(e) => handler(e.target.value)} />
    </div>
  );
};

export default Input;
