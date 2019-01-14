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