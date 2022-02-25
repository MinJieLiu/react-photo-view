import React from 'react';
import photo1 from '../images/1.jpg';
import photo2 from '../images/2.jpg';
import photo3 from '../images/3.jpg';
import photo4 from '../images/4.jpg';
import photo5 from '../images/5.jpg';
import photo6 from '../images/6.jpg';

export const photoImages = [photo1.src, photo2.src, photo3.src, photo4.src, photo5.src, photo6.src];

export const ImageList: React.FC = ({ children }) => {
  return <div className="flex flex-wrap items-center my-6">{children}</div>;
};

export const Image = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ src, ...props }, ref) => {
    return <img ref={ref} src={src} className="mr-2 mb-2 w-24 h-24 cursor-pointer object-cover" alt="" {...props} />;
  },
);

interface ButtonProps extends Omit<React.HtmlHTMLAttributes<HTMLButtonElement>, 'children'> {
  primary?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ primary, className = '', ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={`px-4 py-2 mr-2 rounded-md focus:outline-none ${
        primary
          ? 'bg-sky-600 text-white hover:bg-sky-700 focus:ring-2 focus:ring-opacity-50 focus:ring-sky-600'
          : 'border border-gray-300 hover:bg-gray-200 dark:hover:bg-transparent'
      } ${className}`}
      type="button"
    />
  );
});

export const Overlay: React.FC = ({ children }) => {
  return (
    <div className="absolute left-0 bottom-0 p-2 w-full min-h-24 text-sm text-slate-300 z-50 bg-black/50">
      {children}
    </div>
  );
};
