import { Dispatch, SetStateAction } from 'react';

export type MobileMenuToggleProps = {
	open: boolean;
	onClick: Dispatch<SetStateAction<boolean>>;
};

export type Module = {
	chapter: string;
	lessons: string[];
};
