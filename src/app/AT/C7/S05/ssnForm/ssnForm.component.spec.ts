import { TestBed, inject } from '@angular/core/testing';

import { SsnFormComponent } from './ssnForm.component';

describe('a ssnForm component', () => {
	let component: SsnFormComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SsnFormComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SsnFormComponent], (SsnFormComponent) => {
		component = SsnFormComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});