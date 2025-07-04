"""Add subject, grade_level, ai_confidence columns to student_submissions

Revision ID: 92c731c5ddc5
Revises: c3f0129da86a
Create Date: 2025-07-02 09:53:04.935548

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '92c731c5ddc5'
down_revision = 'c3f0129da86a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('student_submissions', schema=None) as batch_op:
        batch_op.add_column(sa.Column('subject', sa.String(length=100), nullable=True))
        batch_op.add_column(sa.Column('grade_level', sa.String(length=100), nullable=True))
        batch_op.add_column(sa.Column('ai_confidence', sa.Float(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('student_submissions', schema=None) as batch_op:
        batch_op.drop_column('ai_confidence')
        batch_op.drop_column('grade_level')
        batch_op.drop_column('subject')

    # ### end Alembic commands ###
