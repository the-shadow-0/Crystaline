import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  footerContent?: React.ReactNode;
  accentSide?: 'left' | 'top' | 'none';
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title, description, children, footerContent, accentSide = 'none', ...props }, ref) => {
    const accentClass = 
      accentSide === 'left' ? 'border-l-4 border-primary' :
      accentSide === 'top' ? 'border-t-4 border-primary' : '';

    return (
      <Card
        ref={ref}
        className={cn(
          "glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]",
          accentClass,
          className
        )}
        {...props}
      >
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle className="text-xl font-semibold">{title}</CardTitle>}
            {description && <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>}
          </CardHeader>
        )}
        {children && <CardContent>{children}</CardContent>}
        {footerContent && <CardFooter>{footerContent}</CardFooter>}
      </Card>
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
