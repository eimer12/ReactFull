import React from "react";

const LazyTab = React.lazy( () => import('../pages/Tab') );

export default {
	index: true,
	path: ":saludo",
	element:
		<React.Suspense fallback={ <h1> hello </h1> }>
			<LazyTab />
		</React.Suspense>
};

