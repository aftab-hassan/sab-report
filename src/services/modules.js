export const modules = [
	{
        serial:"1",
		name:"lib-commonjs/components/Tooltip/Tooltip.base.js",
		sizeDifference:"+100",
		assetsImpactedCount:3,
		assetsImpactedNames:[
			"Tooltip",
			"DatePicker",
			"Button"
		]
	},
    {
        serial:"2",
        name:"lib-commonjs/components/TextField/TextField.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "OverflowSet",
            "Pivot"
        ]
    },
    {
        serial:"3",
        name:"packages/office-ui-fabric-react/lib-commonjs/components/Calendar/CalendarYear.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "CalendarYear",
            "Pivot"
        ]
    },
    {
        serial:"4",
        name:"packages/office-ui-fabric-react/lib-commonjs/components/Calendar/CalendarMonth.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "OverflowSet",
            "CalendarMonth"
        ]
    },
    {
        serial:"5",
        name:"lib-commonjs/components/ThemeGenerator/ThemeRulesStandard.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "ThemeRulesStandard",
            "Pivot"
        ]
    },
    {
        serial:"6",
        name:"lib-commonjs/components/MessageBar/MessageBar.styles.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "OverflowSet",
            "MessageBar"
        ]
    },
    {
        serial:"7",
        name:"lib-commonjs/components/Sticky/Sticky.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "OverflowSet",
            "Sticky"
        ]
    },
    {
        serial:"8",
        name:"components/FloatingPicker/Suggestions/SuggestionsControl.scss.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "SuggestionsControl",
            "Pivot"
        ]
    },
    {
        serial:"9",
        name:"components/ExtendedPicker/examples/PeopleExampleData.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "OverflowSet",
            "PeopleExampleData"
        ]
    },
    {
        serial:"10",
        name:"lib-commonjs/components/DocumentCard/DocumentCard.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "OverflowSet",
            "DocumentCard"
        ]
    },
    {
        serial:"11",
        name:"lib-commonjs/components/ColorPicker/ColorRectangle/ColorRectangle.styles.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "ColorRectangle",
            "Pivot"
        ]
    },
    {
        serial:"12",
        name:"lib-commonjs/components/Coachmark/index.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "Coachmark",
            "Pivot"
        ]
    },
    {
        serial:"13",
        name:"lib-commonjs/ChoiceGroupOption.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "ChoiceGroupOption",
            "Pivot"
        ]
    },
    {
        serial:"14",
        name:"lib-commonjs/components/ActivityItem/ActivityItem.styles.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "ActivityItem",
            "Pivot"
        ]
    },
    {
        serial:"15",
        name:"lib-commonjs/KeytipLayer.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "KeytipLayer",
            "Pivot"
        ]
    },
    {
        serial:"16",
        name:"lib-commonjs/Icons.js",
        sizeDifference:"+50",
        assetsImpactedCount:2,
        assetsImpactedNames:[
            "OverflowSet",
            "Pivot"
        ]
    }
]

export function getModules(){
    return modules;
}

export function getModule(moduleName){
	return modules.filter(
		module => module.name === moduleName
	)
}