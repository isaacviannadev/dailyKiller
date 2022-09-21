// your-tooltip.jsx
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';
import { TooltipArrowSC, TooltipContentSC } from './style';

type TooltipProps = {
  children: React.ReactNode;
  content: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const Tooltip = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={0}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipContentSC side='bottom' {...props}>
        {content}
        <TooltipArrowSC width={11} height={5} />
      </TooltipContentSC>
    </TooltipPrimitive.Root>
  );
};

export default Tooltip;
