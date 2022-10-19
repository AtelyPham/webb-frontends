import { WebbComponentBase } from '@nepoche/webb-ui-components/types';
import { WebbTypographyProps, WebbTypographyVariant } from '@nepoche/webb-ui-components/typography/types';

/**
 * The `TiltieWithInfo` component props
 */
export interface TitleWithInfoProps extends WebbComponentBase {
  /**
   * The `title` to be displayed
   */
  title: string;
  /**
   * The `title` variant
   * @default "body1"
   */
  variant?: WebbTypographyVariant;
  /**
   * The title tab
   * @default <span></span>
   */
  titleComponent?: WebbTypographyProps['component'];
  /**
   * The class name of the title
   */
  titleClassName?: string;
  /**
   * The `info` appears inside the tooltip to describe the title
   */
  info?: string;
}
