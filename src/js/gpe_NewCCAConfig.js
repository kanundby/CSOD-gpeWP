"use strict";
if(!sessionStorage.gpeNewCCAConfig) {

const gpeNewCCAConfig = [{
	"CS" : {
		"en-US" : {
			"LO1": "b04d180f-ea0a-0024-8db7-ac6e0122907c",
			"LO2": "1e8cd641-200d-4cdb-9bad-84e0942c7905",
			"LO3": "AAat03aSAI"
		},
		"en-UK" : {
			"LO1": "b04d180f-ea0a-0024-8db7-ac6e0122907c",
			"LO2": "451841c3-f101-0024-839a-ac6e01229072",
			"LO3": "11305b7c-ab2c-0024-b3c1-ac6e01229089"
		},
		"de-DE" : {
			"LO1": "b04d180f-ea0a-0024-8db7-ac6e0122907c",
			"LO2": "451841c3-f101-0024-839a-ac6e01229072",
			"LO3": "11305b7c-ab2c-0024-b3c1-ac6e01229089"
		}		
	},
	"HC" : {
		"en-US" : {
			"LO1": "3c63cea2-d9aa-4206-9842-7f67fea126e1",
			"LO2": "10c5804d-6f74-4902-85c2-0263a47bbdf1",
			"LO3": "2526a0e1-dbbb-4abc-96a2-be43cec7093f"
		},
		"en-UK" : {
			"LO1": "b04d180f-ea0a-0024-8db7-ac6e0122907c",
			"LO2": "451841c3-f101-0024-839a-ac6e01229072",
			"LO3": "11305b7c-ab2c-0024-b3c1-ac6e01229089"
		},
		"de-DE" : {
			"LO1": "b04d180f-ea0a-0024-8db7-ac6e0122907c",
			"LO2": "451841c3-f101-0024-839a-ac6e01229072",
			"LO3": "11305b7c-ab2c-0024-b3c1-ac6e01229089"
		}		
	}	
}];

sessionStorage.setItem("gpeNewCCAConfig", JSON.stringify(gpeNewCCAConfig));
}