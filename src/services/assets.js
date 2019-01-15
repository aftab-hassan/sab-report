export const assets = [
	{
        serial:"1",
		name: "Tooltip",
		sizeDifference: "+100",
		modulesAffected: [
			{
				serial:"1",
				name:"lib-commonjs/components/Tooltip/Tooltip.types.js",
				sizeDifference:"+60"
			},
			{
				serial:"2",
				name:"lib-commonjs/components/Tooltip/Tooltip.base.js",
				sizeDifference:"+60"
			},
		]
	},
	{
        serial:"2",
		name: "DetailsList",
		sizeDifference: "+50",
		modulesAffected: [
			{
				serial:"1",
				name:"lib-commonjs/ShimmeredDetailsList.js",
				sizeDifference:"+60"
			},
			{
				serial:"2",
				name:"lib-commonjs/components/DetailsList/ShimmeredDetailsList.styles.js",
				sizeDifference:"+60"
			},
			{
				serial:"3",
				name:"lib-commonjs/components/DetailsList/index.js",
				sizeDifference:"+60"
			},
		]
	},
	{
        serial:"3",
		name: "DatePicker",
		sizeDifference: "+30",
		modulesAffected: [
			{
				serial:"1",
				name:"lib-commonjs/components/DatePicker/DatePicker.base.js",
				sizeDifference:"+60"
			}
		]
	},
	{
        serial:"4",
		name: "Button",
		sizeDifference: "+10",
		modulesAffected: [
			{
				serial:"1",
				name:"lib-commonjs/components/Button/SplitButton/SplitButton.styles.js",
				sizeDifference:"+60"
			}
		]
	},
	{
        serial:"5",
		name: "Slider",
		sizeDifference: "+5",
		modulesAffected: [
			{
				serial:"1",
				name:"lib-commonjs/components/Slider/Slider.base.js",
				sizeDifference:"+1"
			},
			{
				serial:"2",
				name:"lib-commonjs/components/Slider/index.js",
				sizeDifference:"+2"
			},
			{
				serial:"3",
				name:"lib-commonjs/components/ColorPicker/ColorSlider/ColorSlider.js",
				sizeDifference:"+1"
			}
		]
	},
	{
        serial:"6",
		name: "Toggle",
		sizeDifference: "+4",
		modulesAffected: [
			{
				serial:"1",
				name:"lib-commonjs/components/Toggle/Toggle.base.js",
				sizeDifference:"+60"
			},
			{
				serial:"2",
				name:"lib-commonjs/components/Toggle/Toggle.styles.js",
				sizeDifference:"+60"
			}
		]
	},
	{
        serial:"7",
		name: "TextField",
		sizeDifference: "+3",
		modulesAffected: [
			{
				serial:"1",
				name:"lib-commonjs/components/TextField/TextField.js",
				sizeDifference:"+1"
			}
		]
	}
]

export function getAssets(){
    return assets;
}

export function getAsset(assetName){
	return assets.filter(
		asset => asset.name === assetName
	)
}