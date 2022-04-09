import { InputHTMLAttributes } from 'react';
import { Container } from './style';

export default function Input({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return <Container {...rest} />;
}
