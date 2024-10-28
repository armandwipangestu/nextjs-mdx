'use client';
import React, { ReactNode } from 'react';
import {
  FaInfoCircle,
  FaLightbulb,
  FaExclamationTriangle,
  FaExclamationCircle,
} from 'react-icons/fa';

// Define types for the alert types and props
type AlertType = 'note' | 'tip' | 'important' | 'warning';

interface AlertProps {
  type: AlertType;
  children: ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ type, children }) => {
  const alertStyles = {
    note: 'bg-blue-100 border-l-4 border-blue-500 text-blue-700',
    tip: 'bg-green-100 border-l-4 border-green-500 text-green-700',
    important: 'bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700',
    warning: 'bg-red-100 border-l-4 border-red-500 text-red-700',
  };

  const icons = {
    note: <FaInfoCircle className="mr-2" />,
    tip: <FaLightbulb className="mr-2" />,
    important: <FaExclamationCircle className="mr-2" />,
    warning: <FaExclamationTriangle className="mr-2" />,
  };

  return (
    <div className={`flex items-start p-4 rounded my-4 ${alertStyles[type]}`}>
      {icons[type]}
      <div>{children}</div>
    </div>
  );
};

interface MarkdownRendererProps {
  children: ReactNode;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ children }) => {
  return <div className="prose">{children}</div>;
};

export default MarkdownRenderer;
