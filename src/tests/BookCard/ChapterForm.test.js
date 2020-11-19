import React from 'react';
import { render, screen } from '@testing-library/react';
import Chapter from '../../components/BookCard/ChapterForm';

import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';

describe('Chapter', () => {
  describe('Chapter form', () => {
    it('calls callback function with proper attributes on form submit', () => {
      let component;

      let bookId = 0
      let title = 'Add chapter'
      let className = 'pt-4'
      let callback = jest.fn();

      component = render(
        <table>
          <tbody>
            <tr>
              <Chapter
                onSubmit={data => {callback({bookId: bookId, title: data})}}
                title={title}
                className={className}/>
            </tr>
          </tbody>
        </table>
      );

      const chapterInput = component.getByTestId('Add chapter')
      userEvent.type(chapterInput, 'New Chapter Title')
      const editButton = screen.queryByText(title);
      expect(screen.getByTestId('Add chapter')).toHaveValue('New Chapter Title')
      userEvent.click(editButton)
   
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(
        {bookId: bookId, title: 'New Chapter Title'}
      );
    });
  });
})
