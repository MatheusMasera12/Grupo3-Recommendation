import * as React from 'react';

/**
 * UserProfileCard — from @grupo3/recommendation-mfe@1.0.0.
 */
export interface UserProfileCardProps {
  name: string;
  email?: string;
  role?: string;
  avatarUrl?: string;
}

export declare const UserProfileCard: React.ComponentType<UserProfileCardProps>;
