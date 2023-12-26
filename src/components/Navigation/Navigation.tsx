import classNames from 'clsx';
import { useContext, useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import type {
  DropResult,
  ResponderProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import styles from './styles.module.scss';
import { Context } from '../../lib/Context';
import { CheckBox, FilterList, OpenWith } from '../../lib/Icons/Icons';
import type { Category } from '@js/types';

const reorder = (list: Category[], startIndex: number, endIndex: number) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging: boolean, draggableStyle: CSSProperties) => ({
  background: isDragging ? '#ffffff' : '#ededed',
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? '#e6e6e6' : '#ededed',
});

export const Navigation = ({ categories }: { categories: Category[] }) => {
  const { category, setCategory } = useContext(Context);
  const [items, setItems] = useState<Category[]>([]);

  console.log('categories: ', categories);

  useEffect(() => {
    setItems(categories);
  }, [categories]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const reordered = reorder(
      items,
      result.source.index,
      result.destination.index,
    );
    setItems(reordered);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided: ResponderProvided, snapshot: DraggableStateSnapshot) => (
          <div
            ref={provided.innerRef}
            className={styles.list}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={'' + item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={classNames(styles.listItem, {
                      [styles.active]: category === item.id,
                    })}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style,
                    )}
                    onClick={() => setCategory(item.id)}
                  >
                    <OpenWith />
                    <span>{item.name}</span>
                    <CheckBox />
                    <span>{[2, 3].includes(item.id) && <FilterList />}</span>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
