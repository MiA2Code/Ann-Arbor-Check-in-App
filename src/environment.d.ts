declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production' | 'test';

			REACT_APP_TESTING: string;

			REACT_APP_MAP_DEFAULT_ZOOM: number;
			REACT_APP_MAP_DEFAULT_CENTER_X: number;
			REACT_APP_MAP_DEFAULT_CENTER_Y: number;
			REACT_APP_MAP_DEFAULT_EXTEND_MAX_X: number;
			REACT_APP_MAP_DEFAULT_EXTEND_MIN_X: number;
			REACT_APP_MAP_DEFAULT_EXTEND_MAX_Y: number;
			REACT_APP_MAP_DEFAULT_EXTEND_MIN_Y: number;

			REACT_APP_FEATURE_LAYER_RESTAURANT: string;
			REACT_APP_FEATURE_LAYER_PARK: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
