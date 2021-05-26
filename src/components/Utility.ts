/* eslint import/prefer-default-export: 0 */
import { ComponentType } from 'react';

export function getDisplayName(component: ComponentType) {
  return component.displayName || component.name || 'component';
}
