import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visible label. Required: every input needs an accessible name. */
  label: string;
  /** Helper text shown under the field. */
  hint?: string;
  /** Error message. Presence marks the field invalid and announces the message. */
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, id, className, required, ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={cx(styles.field, className)}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
        {required && <span className={styles.required}> (required)</span>}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={cx(styles.input, error && styles.invalid)}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...rest}
      />
      {hint && (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className={styles.error}>
          Error: {error}
        </p>
      )}
    </div>
  );
});
