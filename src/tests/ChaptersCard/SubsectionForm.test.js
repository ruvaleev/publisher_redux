import React from 'react';
import { render, screen } from '@testing-library/react';
import SubsectionForm from '../../components/ChaptersCard/SubsectionForm';

import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';

describe('SubsectionForm', () => {
  describe('Subsection form', () => {
    it('calls callback function with proper attributes on form submit', () => {
      let component;

      let bookId = 0
      let chapterId = 1
      let title = 'Add subsection'
      let className = 'pl-4'
      let callback = jest.fn();

      component = render(
        <table>
          <tbody>
            <tr>
              <SubsectionForm
                onSubmit={data => {callback({bookId: bookId, chapterId: chapterId, title: data})}}
                title={title}
                className={className}/>
            </tr>
          </tbody>
        </table>
      );

      const subsectionInput = component.getByTestId('Add subsection')
      userEvent.type(subsectionInput, 'New Subsection Title')
      const editButton = screen.queryByText(title);
      expect(screen.getByTestId('Add subsection')).toHaveValue('New Subsection Title')
      userEvent.click(editButton)
   
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(
        {bookId: bookId, chapterId: chapterId, title: 'New Subsection Title'}
      );
    });
  });
})
