import { TestBed, inject } from '@angular/core/testing';

import { DFormComponent } from './dform.component';

describe('a dform component', () => {
	let component: DFormComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DFormComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DFormComponent], (DformComponent) => {
		component = DformComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});