import Header from '../../UI/Header';
import { ContentSc, LayoutSC } from './style';

export default function Layout({ children }: any) {
  return (
    <LayoutSC>
      <Header />
      <ContentSc>{children}</ContentSc>
    </LayoutSC>
  );
}
