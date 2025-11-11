import React from 'react';

const Button = ({ variant, size, children }) => {
  const baseClasses = 'font-semibold rounded-lg transition-colors duration-200';
  const paddingClasses = size === 'large' ? 'px-6 py-3' : 'px-4 py-2';

  const variantClasses = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    secondary: 'bg-white text-green-500 border border-green-500 hover:bg-green-50',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
  };

  const selectedVariantClasses = variantClasses[variant] || variantClasses.primary;

  return (
    <button className={`${baseClasses} ${paddingClasses} ${selectedVariantClasses}`}>
      {children}
    </button>
  );
};

export default Button;