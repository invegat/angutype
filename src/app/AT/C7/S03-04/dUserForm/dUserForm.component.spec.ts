import { TestBed, inject } from '@angular/core/testing';

import { DUserFormComponent } from './dUserForm.component';

describe('a dUserForm component', () => {
	let component: DUserFormComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DUserFormComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DUserFormComponent], (DUserFormComponent) => {
		component = DUserFormComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});