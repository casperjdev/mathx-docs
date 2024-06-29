import TextPanelContent from '../atoms/TextPanelContent';
import TextPanelHeader from '../atoms/TextPanelHeader';
import TextPanelContainer from '../molecules/TextPanelContainer';

export default function TextPanel(path: TextPanelProps) {
	return (
		<TextPanelContainer>
			<TextPanelHeader {...path} />
			<TextPanelContent {...path} />
		</TextPanelContainer>
	);
}
