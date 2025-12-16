import { cn } from '../../lib/utils';


export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg text-white',
    secondary: 'bg-white/10 border border-white/20 hover:bg-white/20',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
   <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
