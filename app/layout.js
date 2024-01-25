import { Raleway } from 'next/font/google';
import classnames from "./layout.module.scss";
import './reset.scss';

const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  styles: ['normal', 'italic'],
  subsets: ['latin-ext'],
})

export const metadata = {
  title: "Brx-Blog",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <body>{children}</body>
    </html>
  );
}
