import type { SnackType } from '../types/type';
import { SnackCard } from './SnackCard';

/** お菓子一覧 */
export const SnackList = ({ snacks }: { snacks: SnackType[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {snacks.map((snack) => (
                <SnackCard key={snack.id} snack={snack} />
            ))}
        </div>
    );
};
