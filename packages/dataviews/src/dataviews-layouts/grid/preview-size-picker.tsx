/**
 * WordPress dependencies
 */
import { RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import DataViewsContext from '../../components/dataviews-context';
import type { ViewGrid } from '../../types';

const MIN_IMG_SIZE = 230;
const MAX_IMG_SIZE = 430;

export default function PreviewSizePicker() {
	const context = useContext( DataViewsContext );
	const view = context.view as ViewGrid;
	if ( context.containerWidth < MIN_IMG_SIZE * 2 + 128 ) {
		return null;
	}
	const previewSizeToUse = view.layout?.previewSize ?? 230;
	return (
		<RangeControl
			__nextHasNoMarginBottom
			__next40pxDefaultSize
			showTooltip={ false }
			label={ __( 'Preview size' ) }
			value={ previewSizeToUse }
			min={ MIN_IMG_SIZE }
			max={ MAX_IMG_SIZE }
			withInputField={ false }
			onChange={ ( value = 230 ) => {
				context.onChangeView( {
					...view,
					layout: {
						...view.layout,
						previewSize: value,
					},
				} );
			} }
		/>
	);
}
